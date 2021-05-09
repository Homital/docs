# Homital-USB-Adapter

[GitHub](https://github.com/Homital/Homital-USB-Adapter)

Homital-USB-Adapter is a smart usb adapter of the Homital family. Like [Homital-Light](#homital-light), Homital-USB-Adapter is also developed on top of [ESP8266](https://www.espressif.com/en/products/socs/esp8266/overview) using [MicroPython](https://micropython.org/). The software of Homital-USB-Adapter is a simplified version of that of Homital-Light.

## Project Structure

```homital
.
├── upython (MicroPython scripts)
│   ├── lib (Dependencies)
│   │   └── urequests.py (a buggy subset of the CPython requests library)
│   ├── boot.py (the first script getting ran after startup)
│   ├── db.py (local persistent storage functionalities)
│   ├── homital.py (networking utilities)
│   ├── main.py (the script executed right after boot.py)
│   ├── np.py (switch functions)
│   └── readcmd.py (Serial command processing functions)
└── README.md (Project Summary)
```

## Setup

1. Prepare an ESP8266 development board ([the one we use](https://a.aliexpress.com/_dUiLPnV)) and a female USB connector.
1. Connect the USB connector's positive power line to Pin 0 on the ESP8266 dev-board, and negative power line to GND pin on the dev-board.
1. Clone the Git repository: `git clone https://github.com/Homital/Homital-Light.git`.
1. Connect The ESP8266 development board to your PC via a USB-TTL converter or FTDI adapter. If your dev board already has the chip soldered on it, simply use a USB cable.
1. Download the latest MicroPython firmware from [here](http://micropython.org/download/esp8266/).
1. Install [Thonny Python IDE](https://thonny.org/)
1. Open Thonny IDE, go to `Tools` -> `Options` -> `Interpreter` and select MicroPython(ESP8266) from the dropdown menu. Click on the button under `Firmware`, choose your Port and the firmware you just downloaded and click on install.

![Thonny upload firmware](../assets/thonny_firmware.png)

8. Once the firmware has benn uploaded, close the dialog and you should see a Python shell at the bottom of Thonny window.

![Python shell](../assets/firmware_uploaded.png)

9. Then you can open the `/upython` folder in the Files panel of Thonny at the bottom left, and upload all files and directories to the dev-board, as shown below.

![Upload python files](../assets/thonny_upload.png)

10. Now you have set up a new Homital-USB-Adapter! Reset the devboard and you are ready to go. To configure the device to work with the Homital system, refer to [User Guide](/user-guide/#homital-smart-device-configuration).
