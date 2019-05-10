## Traffic counter

An automated traffic counter sits by a road and counts the number of cars that go past. Every half-hour the counter outputs the number of cars seen and resets the counter to zero. You are part of a development team that has been asked to implement a system to manage this data.

### Tasks Required
1. Write a program that reads a file, where each line contains a timestamp (in yyyy-mm-dd T hh:mm:ss format, i.e. ISO 8601) for the beginning of a half-hour and the number of cars seen that half hour. An example file is included in data/lines.txt. You can assume clean input, as these files are machine-generated. The program should output:
   * The number of cars seen in total
   * A sequence of lines where each line contains a date (in yyyy-mm-dd format) and the number of cars seen on that day (eg. 2016-11-23 289) for all days listed in the input file.
   * The top 3 half hours with most cars, in the same format as the input file
   * The 1.5 hour period with least cars (i.e. 3 contiguous half hour records)

2. Write a REST API that outputs each of the above result as a separate endpoint.
3. Write another API that will return all the data.

### Expectations
* All APIs must return the result in a JSON format.
* Extensive tests to show coverage and report if applicable.
* A readme with clear details on how to run the program on github.