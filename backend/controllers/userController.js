//this is copy pasted code from the previous assignment
//will highlight what I've changed 
//so I don't fucking forget about it

const path = require("path");
const { json } = require("stream/consumers");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class userController {
  static async inscribe(req, res) {
    const { name, email, password } = req.body;
    const hashPassword = await bcryptjs.hash(password, 10);
    //states type in a string and stuff
    //honestly no idea if this will work but here we go ig
    let type = "client"; //not a boolean anymore

    if(name == "Hulk Brasileiro"){      //does the admin process
                                        //cannot state how unsafe
                                        //this actually is
    type = "admin"; //works the same as in previous code
    }
    
    const user = await client.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        type //changed from isAdmin to "type". Again, from bool -> string
             //what a brainfuck
      },
    });

    return res.json({ userId: user.id });
  }
  //from here on out it's pretty much the same
  static async search(req, res) {
    const id = req.params.userId;

    let users;

    if (id != null) {
      users = await client.user.findMany({
        where: {
          id: parseInt(id),
        },
      });
    } else {
      users = await user.findMany({});
    }
    res.render("users");
  }

  static async verifyAuth(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
          return res.json({
            msg: "Invalid token!",
          });
        }
        req.userId = payload.id;
        next();
      });
    } else {
      return res.json({
        msg: "Token not found!",
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.json({
        msg: "User not found.",
      });
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      return res.json({
        msg: "Invalid password.",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });

    return res.json({ 
    msg: "requested token below", //why do i have to return a fucking message
                                  //i hate this shit
                                  //im going insane
                                  //did you know that a turtle's shell is a part of their body?
    token });
  }

  static async verifyIsAdmin(req, res, next) {

    if (!req.userId) {
      return res.json({
        msg: "You're not logged in.",
      });
    }
    
    const user = await client.user.findUnique({
      where: {
        id: req.userId,
      },
    });

    if(user.type == "admin"){ //if() statement if admin
        return res.json({
            msg: "omg real admin :O" //changed to retarded msg
            //i'm running out of fucking patience (and will to live)
        })
    }


    if (user.type == "client") {
      return res.json({
        msg: "You are a client. YOU SHALL NOT PASS!",
      //^^^^ changed to more braindead msg
      });
    }
    next()
  }
}

module.exports = userController;
//done, 3 hip hip oohas for me