---
sidebar_label: 'Hardware Interface Description'
sidebar_position: 50
---

# Hardware Interface Description

## Interface Overview

### USB Type-C Power

Power supply DC-5V

### Ethernet Port

The Meles offers a Gigabit Ethernet port. From the test results, the bandwidth is at least 930 Mbits/sec.

### Micro SD Card Interface

The Micro SD card interface pin specification shows below.

| PIN# | Name       |
| ---- | ---------- |
| 1    | SDIO0_DAT2 |
| 2    | SDIO0_DAT3 |
| 3    | SDIO0_CMD  |
| 4    | VSD_3V3    |
| 5    | SDIO0_CLK  |
| 6    | GND        |
| 7    | SDIO0_DAT0 |
| 8    | SDIO0_DAT1 |
| 9    | SDIO0_DETN |
| 10   | GND        |

### EMMC Socket on Board Interface Feature

The high performance eMMC module is the best choice as the system storage for Meles. The eMMC module with 8GB/16GB/32GB/64GB/128GB is available.

The eMMC Socket pin specification shows below.

|   Name    | PIN  | PIN  |    Name     |
| :-------: | :--: | :--: | :---------: |
|   GND1    |  1   |  34  |    GND11    |
|  EMMC_D5  |  2   |  33  |   EMMC_D6   |
|   GND2    |  3   |  32  |    GND12    |
|  EMMC_D4  |  4   |  31  |   EMMC_D7   |
|   GND3    |  5   |  30  |    GND13    |
|  EMMC_0   |  6   |  29  |   EMMC_D1   |
|   GND4    |  7   |  28  |    GND14    |
| EMMC_CLK  |  8   |  27  |   EMMC_D2   |
|   GND5    |  9   |  26  |    GND15    |
|  EMMC_D3  |  10  |  25  |  EMMC_CMD   |
|   GND6    |  11  |  24  |    GND16    |
| EMMC_RSTN |  12  |  23  | DVDD33_EMMC |
|   GND7    |  13  |  22  | DVDD33_EMMC |
|   GND8    |  14  |  21  | DVDD18_EMMC |
| EMMC_RCLK |  15  |  20  | DVDD18_EMMC |
|   GND9    |  16  |  19  |    GND17    |
|   GND10   |  17  |  18  |    GND18    |

### USB Interface

The Meles has four USB-A connectors. All are USB 3.0. It can be operated with any generic USB computer keyboard and mouse. It can also be used with USB storage, USB to MIDI converters, and almost any other USB capable device/component.

### HDMI Interface

The Meles is equipped with one HDMI connector. As for HDMI, the maximum resolution is 4k@60Hz. Any HDMI monitor should work as a display for the Meles.

The HDMI interface pin specification shows below.

| PIN# | Name        |
| ---- | ----------- |
| 1    | HDMI_DATAP2 |
| 2    | GND         |
| 3    | HDMI_DATAN2 |
| 4    | HDMI_DATAP1 |
| 5    | GND         |
| 6    | HDMI_DATAN1 |
| 7    | HDMI_DATAP0 |
| 8    | GND         |
| 9    | HDMI_DATAN0 |
| 10   | HDMI_CLKP   |
| 11   | GND         |
| 12   | HDMI_CLKN   |
| 13   | HDMI_CEC    |
| 14   | NC          |
| 15   | HDMI_SCL    |
| 16   | HDMI_SDA    |
| 17   | GND         |
| 18   | VCC5V0_HDMI |
| 19   | HDMI_HPD    |

### DSI Interface

### CSI Interface

### Audio Interface

Meles is equipped with a standard 3.5mm jack. An audio lead is necessary to produce sound when there is not an HDMI cable. Audio can be played through speakers or headphones using jack. This requires you to use the Desktop volume control for configuration.

### JTAG Interface

Meles is equipped with a JTAG interface for internal debug.

The JTAG interface pin specification shows below.

| PIN# | Name       |
| ---- | ---------- |
| 1    | JTG_TMS    |
| 2    | JTG_TD     |
| 3    | JTG_TDO    |
| 4    | JTG_TCLK   |
| 5    | GND        |
| 6    | AOUART_TXD |
| 7    | GND        |
| 8    | AOUART_RXD |
| 9    | GND        |
| 10   | GND        |

### 40 PIN GPIO

The Meles is supplied with a 40pin pin GPIO cradle that is compatible with most sensor applications on the market.

**_Hint:_ Actual compatibility is subject to use.**

- The Meles has a 40-pin expansion connector. Each pin is color coded.

<div className='gpio_style' style={{ overflow :"auto"}}>

|  Function4   |    Function3     | Function2  | Function1  |   GPIO   |               Pin#               |              Pin#               |   GPIO    |                Function1                |  Function2  |  Function3  |   Function4   |
| :----------: | :--------------: | :--------: | :--------: | :------: | :------------------------------: | :-----------------------------: | :-------: | :-------------------------------------: | :---------: | :---------: | :-----------: |
|              |                  |            |   +3.3V    |          | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |           |                  +5.0V                  |             |             |               |
|              |                  |            |  I2C1_SDA  | GPIO0_9  |  <div className='green'>3</div>  |  <div className='red'>4</div>   |           |                  +5.0V                  |             |             |               |
|              |                  |            |  I2C1_SCL  | GPIO0_8  |  <div className='green'>5</div>  | <div className='black'>6</div>  |           |                   GND                   |             |             |               |
|              |                  |            | UART3_TXD  | GPIO0_16 |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO2_0  | <div className='orange'>UART0_TXD</div> |             |             |               |
|              |                  |            |    GND     |          |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO2_1  | <div className='orange'>UART0_RXD</div> |             |             |               |
|              |                  |            | UART3_RXD  | GPIO0_17 | <div className='green'>11</div>  | <div className='green'>12</div> | AOGPIO_8  |                I2S2_SCLK                | AUDIO_PA19  | AOUART_TXD  | AOUART_IR_OUT |
|              |                  |            | GMAC1_RXDV | GPIO2_25 | <div className='green'>13</div>  | <div className='black'>14</div> |           |                   GND                   |             |             |               |
|              |                  |            | GMAC1_TXD3 | GPIO2_24 | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO2_22  |               GMAC1_TXD1                |             |             |               |
|              |                  |            |   +3.3V    |          | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO2_31  |               GMAC1_RXD1                |             |             |               |
|              |                  |            |  SPI_MOSI  | GPIO2_16 | <div className='green'>19</div>  | <div className='black'>20</div> |           |                   GND                   |             |             |               |
|              |                  |            |  SPI_MISO  | GPIO2_17 | <div className='green'>21</div>  | <div className='green'>22</div> |  GPIO3_2  |                  PWM0                   |             |             |               |
| UART2_IR_OUT |    UART2_TXD     |  SPI_SCLK  |  SPI_SCLK  | GPIO2_14 | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO2_15  |                SPI_SSN0                 |  UART2_RXD  | UART2_IR_IN |               |
|              |                  |            |    GND     |          | <div className='black'>25</div>  | <div className='green'>26</div> |           |                   ADC                   |             |             |               |
|              |                  |            |  I2C3_SDA  | GPIO2_12 |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO2_11  |                I2C3_SCL                 |             |             |               |
|              |                  |            | GMAC1_TXD2 | GPIO2_23 | <div className='green'>29</div>  | <div className='black'>30</div> |           |                   GND                   |             |             |               |
|              |                  |            | GMAC1_RXD2 | GPIO3_1  | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO0_10  |                UART1_TXD                |             |             |               |
|              |                  |            | UART1_RXD  | GPIO0_11 | <div className='green'>33</div>  | <div className='black'>34</div> |           |                   GND                   |             |             |               |
|              | PLL_DSKEW_BYPASS | AUDIO_PA18 | I2S2_LRCK  | AOGPIO_7 | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_3  |                  PWM1                   |             |             |               |
|              |                  |            | GMAC1_RXD2 | GPIO3_0  | <div className='green'>37</div>  | <div className='green'>38</div> | AOGPIO_10 |               AUDIO_PA21                | BISR_BYPASS |             |               |
|              |                  |            |    GND     |          | <div className='black'>39</div>  | <div className='green'>40</div> | AOGPIO_11 |               AUDIO_PA22                |             |             |               |

</div>