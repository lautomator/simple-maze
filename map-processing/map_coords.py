#!/usr/bin/python

file_in = 'maze-map-out.txt'

def main(fin):
    incr = 25
    coord = ()
    coord_map = []
    x = 0
    y = 0

    # convert the data into a tupple
    # and only add coordinates that
    # are divisible by the increment
    # and are left with a remainder of 0
    with open(fin) as fin:
        for line in fin:
            coord = line.split(',')
            x = int(coord[0])
            y = int(coord[1])

            if x % incr == 0 and y % incr == 0:
                coord_map.append([x, y])

    print coord_map

if __name__ == '__main__':
    main(file_in)
