"""
factory pattern
"""

from blackberry import BlackBerry
from apple import Apple
from android import Android


class Final:
    def __init__(self):
        pass

    def make_os(self, type: str):
        factories = {
            "ANDROID": Android(), 
            "MAC": Apple(), 
            "BLACKBERRY": BlackBerry()
            }
        if not factories[type]:
            return "Invalid type"
        else:
            return factories[type]


test = Final()
#first os model
my_android = test.make_os("ANDROID")
my_android.get_os_type()


# the next one
my_apple = test.make_os("MAC")
my_apple.get_os_type()

my_bb = test.make_os("BLACKBERRY")
# here I have used the methods
my_bb.get_os_type()
