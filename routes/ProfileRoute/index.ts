import { Router } from "express";
import { isLoggedIn as verifyToken } from "../../middleware/IsUserLoggedIn";
// import ProfileModel from "../../models/ProfileModel";
import UserModel from "../../models/UserModel";

// Create a router instance
const profileRouter = Router();

const validator = {
  Snapchat: "https://www.snapchat.com/add/",
  Behance: "https://www.behance.net/",
  Codecademy: "https://www.codecademy.com/",
  DeviantArt: "https://www.deviantart.com/",
  Facebook: "https://www.facebook.com/",
  GitHub: "https://github.com/",
  Instagram: "https://www.instagram.com/",
  LinkedIn: "https://www.linkedin.com/in/",
  Medium: "https://medium.com/@",
  OnlyFans: "https://onlyfans.com/",
  Pornhub: "https://www.pornhub.com/users/",
  Pinterest: "https://www.pinterest.com/",
  Reddit: "https://www.reddit.com/user/",
  Telegram: "https://t.me/",
  Spotify: "https://open.spotify.com/user/",
  TikTok: "https://www.tiktok.com/@",
  Twitter: "https://twitter.com/",
  YouTube: "https://www.youtube.com/user/",
  Vimeo: "https://vimeo.com/",
  Last: "https://www.last.fm/user/",
};

type platformsList =
  | "Snapchat"
  | "Behance"
  | "Codecademy"
  | "DeviantArt"
  | "Facebook"
  | "GitHub"
  | "Instagram"
  | "LinkedIn"
  | "Medium"
  | "OnlyFans"
  | "Pornhub"
  | "Pinterest"
  | "Reddit"
  | "Telegram"
  | "Spotify"
  | "TikTok"
  | "Twitter"
  | "YouTube"
  | "Vimeo"
  | "Last";

const validate = (platform: platformsList, link: string): Boolean => {
  if (link.indexOf(validator[platform]) == 0) return true;
  else return false;
};

/**
 * Handles route to show all profile
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
// profileRouter.post("/", verifyToken, async (req: any, res: any) => {
profileRouter.post("/", async (req: any, res: any) => {
  try {
    // Find all profiles instance using the request body
    const result = await UserModel.findOne({ email: req.body.email });
    if (result) {
      const list = result.socials.filter(item => item.status == 0)
      console.log("success")
      res.status(200).send({
        msg: "Success", data: {
          email: result.email,
          socials: list
        }
      });
    } else {
      res.status(200).json({ error: "No profile" });
    }
  } catch (err) {
    console.log(`error: ${err}`);
    res.status(500).json({ error: err });
  }
});

/**
 * Handles route to add a new profile
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
profileRouter.post("/add", async (req: any, res: any) => {
  // Create a new profile instance using the request body
  try {
    const profileInfo = await UserModel.findOne({ email: req.body.email });
    if (profileInfo) {
      const result = profileInfo.socials.indexOf({
        platform: req.body.platform,
        links: req.body.link,
        status: 0 | 1| 2,
      });
      
      if (result == -1) {
        profileInfo.socials.push({
          platform: req.body.platform,
          username: req.body.username,
          links: req.body.link,
          status: 0,
          accuntType: req.body.type,
        })

        await UserModel.updateOne(
          { _id: profileInfo._id },
          { socials: profileInfo.socials }
        );

        res.json({ msg: "Success" });
      } else {
        console.log("Profile already exist");
        res.status(200).json({ msg: "Already exist" });
      }
    } else {
      res.status(200).json({ error: "Email not found" })
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

profileRouter.post("/remove", async (req: any, res: any) => {
  // Create a new profile instance using the request body
  try {
    const profileInfo = await UserModel.findOne({ email: req.body.email });
    if (profileInfo) {
      const result = profileInfo.socials.indexOf({
        platform: req.body.platform,
        links: req.body.link,
        status: req.body.status,
        accuntType: req.body.type
      })

      if (result > -1) {
        profileInfo.socials.splice(result, 1)
        await UserModel.updateOne(
          { _id: profileInfo._id },
          { socials: profileInfo.socials }
        );
        console.log("success")
        res.json({ msg: "Success" });
      } else {
        console.log("profile not found")
        res.status(404).json({ error: "Profile not found" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// Export the profile router for use in other modules
export default profileRouter;
