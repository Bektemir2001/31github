import tornado.ioloop
import tornado.web
import tornado.websocket
import time

class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True

    def open(self):
        print("open success")
        # timer that sends data to the front end once per second
        self.timer = tornado.ioloop.PeriodicCallback(self.send_data, 1000)
        self.timer.start()

    def on_close(self):
        self.timer.stop()

    def send_data(self):
        # send the current time to the front end
        self.write_message('Now is' + str(time.time()))

    def on_message(self, message):
        pass  # здесь вы можете добавить обработку входящих сообщений, если это необходимо

application = tornado.web.Application([
    (r'/websocket', WebSocketHandler),
])

if __name__ == '__main__':
    application.listen(3001)
    tornado.ioloop.IOLoop.current().start()
