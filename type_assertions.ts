let message; //type is any
message= "Welcome Jonathan to TypeScript"; //set the type to string
// const endswith_c= message.endsWith("t"); // endswith wont work

// to solve this,
const endsWith_t=(<string>message).endsWith("t"); // this time the methods for strings will work

const alternative_way=(message as string).endsWith("t"); //works the same
