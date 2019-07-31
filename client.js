const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.0.110",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    conn.write("Name: RAY");

    conn.on("data", data => {
      console.log(data);
    });

    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  return conn;
};

module.exports = { connect };
