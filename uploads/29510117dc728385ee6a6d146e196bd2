(&&) :: Bool -> Bool -> Bool
True && True    = True
False && True   = False
True && False   = False
False && False  = False 





exOr :: Bool -> Bool -> Bool 
exOr True False = True 
exOr False True = True
exOr _ _ = False


ifThenElse :: Bool -> Int -> Int -> Int
ifThenElse True a _ = a
ifThenElse False _ b = b


daysInMonth :: Int -> Int 
daysInMonth 4 = 30
daysInMonth 6 = 30
daysInMonth 9 = 30
daysInMonth 11 = 30
daysInMonth 2 = 28
daysInMonth 1 = 31

sumNumbers :: Int -> Int
sumNumbers n
     | n>1 = n + sumNumbers(n-1)
     | n==1 = 1

sumSquares :: Int -> Int 
sumSquares a
  | a == 0 = 0
  | a > 0 =  a + a * (a-1)

  
power :: Int -> Int -> Int 
power n p
    | p==1 = n
    | p==0 = 0
    | p>1 =  n * power n (p-1)



sumFromTo :: Int -> Int -> Int
sumFromTo a b
  | a > b = 0
  | otherwise = a + sumFromTo (a + 1) b

gcdd :: Int -> Int -> Int 
gcdd a b 
  | a==b = a
  | a>b = gcd (abs (a-b)) b
  | otherwise = gcd(abs (b-a)) a



--intSquareRoot :: Int -> Int
--intSquareRoot n = findRoot n n

--findRoot :: Int -> Int -> Int
--findRoot n s = (s + n `div` s) `div` s





