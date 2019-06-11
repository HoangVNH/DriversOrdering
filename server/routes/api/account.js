const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const isAdmin = require('../../validation/is-admin');

// Load Accounts Model
const Account = require('../../models/Account');


// @route   GET api/account/test
// @desc    Tests accounts route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Account Works' }));


// @route   GET api/account/:_id/all
// @desc    Get all account if that account IS Administrator
// @access  Public
router.get('/all', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
      
      const errors = {};
      
      // Account.findById({_id: req.params._id})
      //   .then(account => {
      //     const { errors, isValid } = isAdmin(account);
          
      //     if(!isValid) {
      //       // If any errors, send 404 wih errors object
      //       return res.status(404).json(errors);
      //     }
      //   });
    
      Account.find()
        .then(account => {
          // if (!profiles) {
          //   errors.noprofile = 'There are no accounts';
          //   return res.status(404).json(errors);
          // }
    
          res.json(account);
        })
        .catch(err => res.status(404).json({ account: 'There are no accounts' }));
});


router.get('/all', (req, res) => {
  Account.find()
  .then(account => {
    // if (!profiles) {
    //   errors.noprofile = 'There are no accounts';
    //   return res.status(404).json(errors);
    // }

    res.json(account);
  })
  .catch(err => res.status(404).json({ account: 'There are no accounts' }));
});


// @route   POST api/account/register
// @desc    Register account
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    Account.findOne({ username: req.body.username }).then(account => {
        if (account) {
          errors.username = 'Username already exists';
          return res.status(400).json(errors);
        } else {

            const motoImage = gravatar.url(req.body.motoImage, {
                s: '200', // Size
                r: 'pg', // Rating
                d: 'mm' // Default
              });
            const licenseImage = gravatar.url(req.body.licenseImage, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });
            const avatar = gravatar.url(req.body.avatar, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });

            const newAccount = new Account({
                username: req.body.username,
                password: req.body.password,
                permission: {
                    name: req.body.name,
                    mobilenum: req.body.mobileNum,
                    address: req.body.address,
                    motoImage,
                    licenseImage,
                    avatar
                }
                
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newAccount.password, salt, (err, hash) => {
                if (err) throw err;
                newAccount.password = hash;
                newAccount
                    .save()
                    .then(account => res.json(account))
                    .catch(err => console.log(err));
                });
            });
      }
    });
});


// @route   GET api/account/login
// @desc    Login Account / Returning JWT Token
// @access  Public
// router.post('/login', (req, res) => {
//     const { errors, isValid } = validateLoginInput(req.body);
  
//     // Check Validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
  
//     const username = req.body.username;
//     const password = req.body.password;
  
//     // Find user by username
//     Account.findOne({ username }).then(account => {
//       // Check for account
//       if (!account) {
//         errors.username = 'Username not found';
//         return res.status(404).json(errors);
//       }
  
//       // Check Password
//       bcrypt.compare(password, account.password).then(isMatch => {
//         if (isMatch) {
//           // Account Matched
//           const payload = { id: account.id, name: account.name, avatar: account.avatar}; // Create JWT Payload
  
//           // Sign Token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             { expiresIn: 3600 },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: 'Bearer ' + token
//               });
//             }
//           );
//         } else {
//           errors.password = 'Password incorrect';
//           return res.status(400).json(errors);
//         }
//       });

//       // Check active status
//       if (account.active === false){
//         errors.active = 'This account has not activated';
//         return res.status(400).json(errors);
//       }
//     });
// });


// @route   GET api/account/:_id
// @desc    Get profile by account ID
// @access  Public

router.get('/:_id', (req, res) => {
    const errors = {};
  
    Account.findOne({ _id: req.params._id })
      .populate('accounts', 'permission', ['name', 'mobileNum', 'avatar', 'motoImage'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this account';
          res.status(404).json(errors);
        }
  
        res.json(profile);
      })
      .catch(err =>
        res.status(404).json({ profile: 'There is no profile for this account' })
      );
});


// @route   GET api/account/profile
// @desc    Get current users profile
// @access  Private
router.get(
    '/profile/:_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};
  
        Account.findOne({ _id: req.params._id })
            .populate('accounts', 'permission', ['name', 'mobileNum', 'address', 'avatar', 'motoImage', 'licenseImage'])
            .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this account';
                return res.status(404).json(errors);
            }
            res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);


// @route   POST api/profile
// @desc    Create or Edit user profile
// @access  Private
// router.post(
//   '/', 
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateProfileInput(req.body);
//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     // Get fields
//     const profileFields = {};
//     profileFields.user = req.user.id;
//     if (req.body.handle) profileFields.handle = req.body.handle;
//     if (req.body.company) profileFields.company = req.body.company;
//     if (req.body.website) profileFields.website = req.body.website;
//     if (req.body.location) profileFields.location = req.body.location;
//     if (req.body.status) profileFields.status = req.body.status;
//     if (req.body.bio) profileFields.bio = req.body.bio;
//     if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;

//     // Create or Edit current user profile with unique handle
//     Account
//       .findOne({ user: req.user.id })
//       .then(profile => {
//         // If profile not exist, then create a new one, Otherwise just update 
        
//         // Create new profile
//         if(!profile){
//           // Check if handle exists (handle should be unoque for all profile)
//           Profile
//             .findOne({ handle: profileFields.handle})
//             .then(profile => {
//             if(profile){
//               errors.handle = 'handle already exists';
//               res.status(400).json(errors);
//             }
//           });
//           new Profile(profileFields).save().then(profile => res.json(profile));
//         }
//         // Update the profile
//         else{
//           // Check if handle exists for other user
//           Account
//             .findOne({ handle: profileFields.handle})
//             .then(p => {
//             if(profile.handle !== p.handle){
//               errors.handle = 'handle already exists';
//               res.status(400).json(errors);
//             }
//           });
//           Profile
//             .findOneAndUpdate(
//               {username: req.account.username},
//               {$set: profileFields},
//               {new: true}
//             )
//             .then(profile => res.json(profile));
//         }
//       });
//   }
// );


// @route   GET api/account/current
// @desc    Return current account
// @access  Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.account.id,
        name: req.account.name,
      });
    }
);

module.exports = router;