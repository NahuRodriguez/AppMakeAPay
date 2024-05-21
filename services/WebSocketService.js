class WebSocketService {
    constructor(url) {
      this.ws = new WebSocket(url);
    }
  
    onMessage(callback) {
      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        callback(message);
      };
    }
  
    close() {
      this.ws.close();
    }
  }
  
  export default WebSocketService;
  