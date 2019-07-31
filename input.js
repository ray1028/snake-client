let connetion;

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  } else if(key === "w"){
    connetion.write('Move: up')
  } else if(key === "a"){
    connetion.write('Move: left')
  } else if(key === "s"){
    connetion.write('Move: down')
  } else if(key === "d"){
    connetion.write('Move: right')
  } else { 
    connetion.write('Say: Hello');
  }
};

const setupInput = function(conn) {
  connetion = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
