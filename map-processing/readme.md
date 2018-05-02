Using Imagemagik to get the map coordinates
===========================================

Requirements: get [Imagemagik](https://www.imagemagick.org/script/index.php).

1. The image (map) should be a *transparent or white background png file* with only *1 color*. The one color should be the solid parts of the map (walls) and it should be black.

2. Convert the map to text information. This will give you every coordinate of every pixel and color information. Use this command to get the coordinates: `convert [nameofimage].png [nameofimage]-map.txt`

3. Since you do not need the background information, use this script to get the coordinates of the black lines only: `get_walls.py`

4. Since every coordinate is not necessary, use this script to get the simplified coordinates based on the appropriate increment (i.e., every 25px): `map_coords.py > map.txt`

5. `map.txt` will have the entire map that you can use as an array inside of your application. Clean the file upa s necessary.
