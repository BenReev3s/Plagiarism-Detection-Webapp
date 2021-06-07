 absolute :: Int -> Int 
 absolute x | x>= 0     = x
            | otherwise = -x


 howManyEqual :: Int -> Int -> Int -> Int
 howManyEqual x y z
   | x == y && y == z = 3
   | x /= y && x /= z && y /= z = 0
   | otherwise = 2


 sign :: Integer -> Integer
 sign x  =
     if x > 0
       then 1
       else if x == 0
       then 0
     else -1

 sumDiagonalLengths :: Float -> Float -> Float -> Float
 sumDiagonalLengths s1 s2 s3 = side s1 + side s2 + side s3
                  where
                      side s = sqrt( 2* s^2)

 howManyAboveAverage :: Int -> Int -> Int -> Int
 howManyAboveAverage a b c  
     | a >=average && b >=average || fromIntegral b >= average && c >= average || a >= average && c >= average = 2
     | a >=average || b >= average || c >= average = 1
     | otherwise = 0
     where
       average = (a + b + c) `div` 3


 validDate :: Int -> Int -> Bool
 validDate d m
   | d <= 31 && m `elem` thiertyOne = True
   | d <= 30 && m `elem` thirty = True
   | d <= 28 && m == 2 = True
   | otherwise = False
   where
     thirty = [1, 3, 5 , 7, 8, 10, 12]
     thiertyOne = [4, 6, 9, 11]


 daysInMonth :: Int -> Int -> Int 
 daysInMonth m y 
   | m==9 || m==4 || m==6 || m==11 = 30
   | m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m== 12 =31
   | m== 2 && y `mod` 4 == 0 && y`mod` 100 /=0 || y `mod` 400 == 0 = 29
   | otherwise = 28

--Written
 --1. For your sumThree function from worksheet 1, give calculations that evaluate the following expressions:
-- sumThree 3 5 7           = 15
--sumThree 8 (1 + 3) 2      = 14 

--For your threeDifferent function from worksheet 1, give calculations that evaluate
--the following expressions:
--threeDifferent 1 4 2
--threeDifferent 1 7 7