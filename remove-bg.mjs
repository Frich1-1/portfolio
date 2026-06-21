import { Jimp } from 'jimp';

async function removeBackground() {
  try {
    const image = await Jimp.read('public/richie-photo.png');
    
    // Iterate over all pixels
    image.scan((x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];
      
      // If the pixel is very close to white, make it transparent
      if (red > 230 && green > 230 && blue > 230) {
        image.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
      }
    });

    await image.write('public/richie-photo.png');
    console.log("Background removed successfully!");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
