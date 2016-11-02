<img src="https://github.com/Rubinhuang9239/Spherical-Merge/blob/master/icon.png" width="120"/>
# Spherical-Merge
Dual Lens 360 camera stitching solution with manual controls

now supporting Ricoh ThetaS and Insta360 Recorded Raw.

<h4>Preview with Demo</h4>

```
$ cd .../Spherical-Merge

$ python -m SimpleHTTPServer 8000
```
open Google Chrome and type "http://localhost:8000"

<h4>Demo Interface</h4>
* Stitch Mode

Stitch menu will pop up from the side and you can choose to load a stitch preset for your 360 camera.

* Choose A Live Port

Settings for live from USB and HDMI are slightly diffenent.
<br />
Now supporting:
<br /><b>Ricoh ThetaS</b> when live from it's <b>USB</b> port, or it's recorded video.
<br /><b>Ricoh ThetaS</b> when live from it's <b>HDMI</b> port. (HDMI Capture device needed, I am using "MegaWell" HDMI to USB 3.0)
<br /><b>Insta360 4K</b> when live from PBS with it <b>Unstitched</b> video.

* Headset Mode

Split the screen side by side to fit on VR headsets. Support phone accelerometer.

* Get user Media

Get live video from 360 camera and map the video as texture onto the sphere model.
Web Cam will be used instead if there is no other camera connected.

<h4>Stop "getUserMedia" when not using it</h4>

