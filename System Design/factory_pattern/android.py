from factory import Factory


class Android(Factory):
    def __init__(self):
        pass

    def get_os_type(self):
        print("This is an android type")
