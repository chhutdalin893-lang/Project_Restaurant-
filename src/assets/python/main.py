import qrcode

url = "https://maps.apple.com/?ll=11.541416,104.900204&q=My%20Locati"
img_file = "C://web/projects/rastaurant/src/assets/images/mycode.png"
img = qrcode.make(url)
img.save(img_file)