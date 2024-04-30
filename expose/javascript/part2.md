## Question 1 ##  
Line 12 will print out 3 beause that is the length of prices. The for loop run untills i is equal to the length of prices. And the length of prices is 3. Thats why line 12 printed 3.  
## Question 2 ##  
line 13 will print out 150 becasue discounted price of the last element in prices is 300 and discounted price of 300 is 150  
## Question 3 ##  
line 14 will print 150 because final price of the last element in prices is 150  
## Question 4 ##  
The function will return the array containing all the discounted final prices i.e [50, 100, 150]. The fuction returns this becasue the for loop iterates over all the element in the given array and calculates every elements discounted price. Then stores the dicounted price in the discounted array. Then this array is returned ar the end of te funtion.   
## Question 5 ##  
Line 12 will give an error as the scope of i is only in the for loop not outside of it  
## Question 6 ##  
Line 13 will give an error as the scope of discountedPrice is only in the for loop not outside of it  
## Question 7 ##  
Line 14 will print out 150 becasue thats the final price of the last element in the prices array.  
## Question 8 ##  
The function will return the array containing all the discounted final prices i.e [50, 100, 150]. The fuction returns this becasue the for loop iterates over all the element in the given array and calculates every elements discounted price. Then stores the dicounted price in the discounted array. Then this array is returned ar the end of te funtion.  
## Queston 9 ##  
ine 11 will give an error as the scope of i is only in the for loop not outside of it  
## Question 10 ##  
Line 12 will print 3 because that is the length of the array that was passed in. This line will not cause an error as length was not changed throught the program.  
## Question 11 ##  
The function will return the array containing all the discounted final prices i.e [50, 100, 150]. The fuction returns this becasue the for loop iterates over all the element in the given array and calculates every elements discounted price. Then stores the dicounted price in the discounted array. Then this array is returned ar the end of te funtion. Additionally, the const keyword is not causing any error because we are not changing discounted, we are simply just adding values to it.  
## Question 12 ##  
A) The notation for accessing the value of the name property in the student object is ``` student.name ```  
B) The notation for accessing the value of the Grad Year property in the student object ``` student['Grad Year'] ```  
C) The notation for calling the function for the greeting property in the student object ``` student.greeting() ```  
D) The notation for accessing the name property of the object in the Favorite Teacher property in student ``` student['Favorite Teacher'].name ```  
E) The notation for accessing index zero in the array of the courseLoad property of the student object ``` student.courseLoad[0] ```  
## Question 13 ##  
A) For '3' + 2 it will output 32 because it peforms the string addition thats why its givng '32' which is a string  
B) For '3' - 2 it will output 1 becasue it converts the string 3 into integer and performs regular subtraction. S0 3 - 2 gives us the integer 1  
C) For 3 + null it will output 3 because null counts as the integer 0. and 3 + 0 = 3.  
D) For '3' + null it will output 3null because null will be converted to string and will be added to 3 i.e '3' + 'null' = '3null'  
E) For true + 3 it will output 4 becasue true is 1 and 3 + 1 = 4  
F) For false + null it will return 0 becasue false is 0 and null is nothing which is 0.  
G) For '3' + undefined it will output 3undefined becasue undefined will be converted to a string and will be added i.e '3' + 'undefined' = '3undefined'  
H) For '3' - undefined it will output NaN because undefined doesn't have a valid numeric value.  
## Question 14 ##  
A) For '2' > 1 it will out put true because it does normal integer comparison  
B) For '2' < '12' it will output false because this comparison compares character by character, and since 2 is not less than 1 it retuns false  
C) For 2 == '2' it will output ture because it does the regular equal comparison. and 2 == 2 so it returns true.  
D) For 2 === '2' it will return false because this comparison also checks the type and the types are differnt so it returns false.  
E) For true == 2 it will output false because true = 1 and 1 is not equal to 2 so it returns false.  
F) For true === Boolean(2) it will output true because Boolean(2) = true and true == true. Hence output is true.  
## Question 15 ##  
The == comparison ignors the type of the variable i.e 1 == '1' will return true  
The === comparison doesn't ignore the type of the variable i.e 1 === '1' will return false  
## Question 17 ##  
The result that the code will output is [ 2, 4, 6 ]. We get this result because the function modifyArray itterates through the given array and calles the doSomething function for each element in the array. And the doSomething function multiplies each element by 2. Hence thats how we got the resulting array, it is just the original array multiply by 2.  
## Question 19 ##  
The output of the above code is 1 4 3 2
