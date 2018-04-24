#!/usr/bin/python

import sys

def main(arg):
    incr = 25
    coords = []
    temp_coord = []
    coords_map = []
    coordinates = []
    count = 0
    limit = 2

    # get the relevant coords items
    with open(arg) as fin:
        for line in fin:
            if int(line) % incr == 0:
                coords.append(int(line))

    # create the coordinates
    for coord in coords:
        while count < limit:
            temp_coord.append(coord)
            count += 1
        coords_map.append(temp_coord)
        temp_coord = []
        count = 0

    # convert to a tupple
    coordinates = list(tuple(item) for item in coords_map)

    print coordinates

# Specify the target file(s).
args = sys.argv[1:]  # Exclude the name of the script.

if __name__ == '__main__':
    main(args[0])


# >>> xx=[['a',1],['b',2],['c',3],['c',3]]
# >>> set(tuple(element) for element in xx)
# set([('a', 1), ('b', 2), ('c', 3)])
# >>>
# Tuples, unlike lists, can be hashed. Hence. And once you are done, convert the elements back to list. Putting everything together:

# >>> [list(t) for t in set(tuple(element) for element in xx)]
# [['a', 1], ['b', 2], ['c', 3]]