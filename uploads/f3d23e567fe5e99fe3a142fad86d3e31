

import System.Directory.Internal.Prelude ( toUpper )

sumDifference :: Int -> Int -> (Int,Int)
sumDifference x y = (x+y,x-y)



type StudentMark = (String, Int)

grade :: StudentMark -> Char
grade (s1, m1)
    | m1 >= 70  = 'A'
    | m1 >= 60 = 'B'
    | m1 >=50 = 'C'
    | m1 >= 40 = 'D'
    | otherwise = 'E'





capMark :: StudentMark -> StudentMark
capMark (s1,m1)
    | m1 > 40 = (s1,40)
    | otherwise = (s1,m1)



theList = [1 .. 1000]

firstNumbers :: Int -> [Int]
firstNumbers n = [x| x<- theList, x<=n]



aList = [1 .. 1000]

firstSquares :: Int -> [Int]
firstSquares x = [n^2| n<- aList, n<=x]



capitalise :: String -> String
capitalise string = map toUpper string







testMarks =  [("Jo",37), ("Sam",76)] 

capMarks :: [StudentMark] -> [StudentMark]
capMarks [marks] = [(s1, mk1) | (s1, mk1) <- [capMark marks] ]



gradeStudents :: [StudentMark] -> [(String,Char)]
gradeStudents studentList =   [ (st, grade (st,mk))   | (st,mk) <- studentList   ]



duplicate:: String -> Int -> String    
duplicate string n 
    | n == 0 = []
    | otherwise = string ++ duplicate string (n-1)



divisors :: Int -> [Int]
divisors x = [n| n<- aList, mod x n ==0]



isPrime :: Int -> Bool
isPrime n 
    | length divs  == 2 = True
    | otherwise = False
    where 
        divs = divisors n











