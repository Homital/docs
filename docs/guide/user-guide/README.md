# User Guide

Users come here!!!

## Set up Your Homital-Light / Homital-USB-Adapter

Now that you have added your device in the Homital App, it is time to configure your homital device!

::: tip
In the instructions below, we use the Homital-Light as an example, but the same instructions also apply to Homital-USB-Adapter.
:::

First, install a serial monitor program on your computer. Some potions are [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/), [Arduino](https://www.arduino.cc/en/main/software), [pySerial](https://pythonhosted.org/pyserial/index.html) and [screen](https://linux.die.net/man/1/screen). Here we will use pySerial to demonstrate.

Take out your Homital-Light:

![Homital-Light](../assets/homital-light.jpg)

Use a Micro-USB to connect your Homital-Light to your PC. Refer to the picture below for how to connect the Homital-Light.

![Micro-USB connection](../assets/homital-light-micro-usb.jpg)

Notice that some versions of Homital-Light have two Micro-USB female ports. If that's the case, use the one that has a rectangular chip labelled `WCH CH340G` soldered next to it, the chip is shown below. You can also see this chip on the PCB in the picture above.

![CH340](../assets/ch340.png)

Once the light is powered, it will show a startup pattern, where the color will change from red to green to blue, as shown below.

![light startup](../assets/light_startup.gif)

Then, it will try to connect to WiFi, while showing spinning red light.

![light connecting](../assets/light_connecting.gif)

Open your serial communication program and connect to Homital-Light's port using `115200` as baud rate. For pySerial, open a terminal window and enter `python -m serial.tools.miniterm <PORT_OF_HOMITAL_LIGHT> 115200`.

After a while, you will be prompted to enter commands. This is where you configure your Homital-Light to connect to WiFi and Homital-Core.

Supported commands:
  - `wifi <SSID> <PASSWORD>` to set your WiFi credentials.
  - `setByName <HOMITAL_USERNAME> <ROOMNAME> <DEVICENAME>` to configure the device.
  - `setBy`

![pySerial](../assets/pyserial.png)
