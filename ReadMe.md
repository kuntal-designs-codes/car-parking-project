To start this project on a windows PC simply download the project then :
- npm install 
- npm start 

Description : 
It is a Car Parking system . It has  dedicated space for car parking and it has different lots; every lot has certain number of empty parking slots. Someone sits at the main entrance of all these lots; which is called the control tower. From control tower we actually find out which parking lot has empty slot and assign the nearest parking lot to a car. 


MongoDB Model : 


Test Out the API : 

1 .  Make a post request to the API at : http://localhost:3000/api/lot with body of JSon that contains the Capacity of the lot 

request body 

{
    "capacity" : 5 //example 
}

"Creating a lot")

2 . To park a Car in the nearest spot we only need to send a Post request of the car serial number @ http://localhost:3000/api/slot/park .  "Parking a Vehicle|| car")

{
    "licence_no" : "wb017652"
}

3 . When we unpark a car it will provide us with the  final bill . To unpark a car We need to send a post request with the lisence_no of the car to http://localhost:3000/api/slot/unpark . "Unpark a car")

{
    "licence_no" : "wb017652"
}

4. Get the Slot or Car info using either one of them or both. Endpoint will                       be                      http://localhost:4000/api/slot/slotandcarinfo

    POST request body

    {
        "licence_no": "wb126345",
    }

    or, 
     
    {
       "slot_no": 2
    }

