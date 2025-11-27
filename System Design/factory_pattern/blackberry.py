from factory import Factory


class BlackBerry(Factory):
    def __init__(self):
        pass

    def get_os_type(self):
        print("This is a Blackberry")
