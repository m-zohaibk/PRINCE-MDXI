const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VVW5OiOhD+K1N5xVoVEMSqqTrIRZARb+CIp/YhQsAoN5OI4Jb/fQtnZmcfztkzh6fQ6fT3dffXyQ+QF5giBzVg9AOUBFeQoXbJmhKBERhf4hgR0AERZBCMgPHim7rV5JEiClY4FXacfnA9B+lEvcZOGuvpgDvNdnJj+c/g3gHlZZ/i8A8Bx/QmzLuIujM2VRqOp5VvuRlGUSVkqgdfpK26XwXZ7JwVz+DeRoSY4DwxygPKEIGpg5oFxORr9B1nxZfOOebOi0wLHSOqyxdykuqx6urbyYVXvGVB1qUqTYqv0e+bxrVk82S4DtZF4IoroX8N5jUss557kLozU1DDQLS3M81/o09xkqPIjlDOMGu+XHfb2dLtuU4cOw4S/1ZAbZH2EhvuhL1ynWA0EYVhvs26pflF4puttdS8fjBL1pJgORPF9k89M0YmGyqzLamnoeeMD2hYbcTfiS/Ih1ZO/6fuF93cNVTf6CoSZzvrJje9un9arTfbWvJJzfNnf11xim5Yw6/Rl1PbjHdFOs27qX4NS86AfD8c2qfJdKFR99Ydc/FcfY292vikD9mF/InlMg+PYuPug9IpBCouvHhDdcngYoHf38a5MAyMhR+cmx7pytSMTL5uSiMLIXfBG+EW+tuKc/2cVBCZPE2SlM38SLs+PzI6ocaOwKh/7wCCEkwZgQwXeWvj+4MOgFG1RiFB7FFeEK43q9dwMyVlE3F+JDv1Ojqo8T4bIDfe7j2zlnW5VsxlOHwGHVCSIkSUosjClBWkmSFKYYIoGP39vQNyVLO3xrVwQr8DYkwo8/NLmRYw+ujqxyYMw+KSs3WTh1q7QASMep9mxBjOE9rW8ZJDEh5whbQDZBSMYphS9CtDRFD0bvt1uj0VIQZxSsEIaIuFSyp/bLw0CabiZKIaiaolKvhE+2jbW1lw12N50KyCPX6ZTJL5KTTQuX6psP8qR8fQuIZnrCnUdnPx+R+CgBGYG33rmIVJudE2cxdHlrJcWq5yUMRDj/PmqwAu4e646/K7sOvWK1OR1XHDjZdHtYd8/qhmVykwroFPzCEfGkuIk+I2Tp5btAhVOES/g2m3wznNDiUOu0FzXUgbSR8YA3my18+3S9y8ZNlsuHL5OV8SN0W5Zp2rKpvYmyO3bDQEjcQb294Us8Jb9NFhPtQG21xV3wSVPZSMIzACCi+IQ55X5IHYGwnyX/Tbte0HLMtvOWKgA9KHGy+KsigqgjToKaIktZ7tRgfksA0Gdk/qk/00frLBx7yk7/cUfiipRWt/Y4weY/9+7D/R3+rSqqt37/wW4/0i+beHIah68o6fnV4nIq4PhV5aY+tM17KYmhchEMYzyymSaq/pOw7c7987oEwhiwuSgRGAeUSKR26kuLRytfO4+AOYpia2kSRam3kKKVM/R8DDGaIMZiUY9WVZFAZDqdd/81qQorQgPYARELK0f1yDDsgatSzXDLKPiQJq+y24Btx/Ahhok7FtBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
