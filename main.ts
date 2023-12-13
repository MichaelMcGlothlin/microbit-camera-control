input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
})
basic.showString("A=photo B=front-rear")
