from random import *
import math
import json

star_arr = []
for i in range(0, 100):
    star_arr.append([random() * 3.14, random(), random()])

stars_rad = []
stars_rad.append(star_arr)
for i in range(1, 314):
    stars_rad.append([])
    for star in star_arr:
        stars_rad[i].append([(star[0] + 0.01 * i) % 3.14, (star[1]), (star[2])])

star_x_y_z = []

for arr in stars_rad:
    star_x_y_z.append([])
    for star in arr:
        star_x_y_z[-1].append([math.sin(star[0]) * star[1], math.cos(star[0]) * star[1], star[2]])

output = open('output.js', 'w')
output.write('const Data = ')
output.write(json.dumps(star_x_y_z))
output.write('\n\nexport default Data;')
output.close()