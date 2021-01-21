const AccessControl = require("accesscontrol");


const ac = new AccessControl();

ac.grant("Advisor")
    .readAny("role")
  .grant("Admin")
    .extend("Advisor")
    .createOwn("role")
    .updateAny("Advisor", ["RoleId"])
    .updateAny("Client", ["RoleId"]);

ac.grant("Client")
    .readOwn("file")
    .createOwn('file')
    .grant("Advisor")

// ac.grant("reader")
//     .readAny("post",['!id'])
//   .grant("writer")
//     .createOwn("post")
//     .deleteOwn("post")
//     .readAny("post")
//   .grant("editor")
//     .extend("writer")
//     .updateAny("post")
//     .deleteAny("post")
//   .grant("admin")

//   let grantArray = [
//     { role: 'reader', resource: 'post', action: 'read:any', attributes: '*, !id' },
//     { role: 'writer', resource: 'post', action: 'read:any', attributes: '*' },
//     { role: 'writer', resource: 'post', action: 'create:own', attributes: '*' },
//     { role: 'writer', resource: 'post', action: 'update:own', attributes: '*' },
//     { role: 'writer', resource: 'post', action: 'delete:own', attributes: '*' },
//     { role: 'editor', resource: 'post', action: 'read:any', attributes: '*' },
//     { role: 'editor', resource: 'post', action: 'create:any', attributes: '*' },
//     { role: 'editor', resource: 'post', action: 'update:any', attributes: '*' },
//     { role: 'editor', resource: 'post', action: 'delete:any', attributes: '*' },
//   ]

module.exports = ac;
