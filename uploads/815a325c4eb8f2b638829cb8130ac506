

import Data.Char
mult10 :: [Int] -> [Int]
mult10 = map (*10)

onlyLowerCase :: String -> String
onlyLowerCase = filter isLower 

--orAll :: [Bool] -> Bool
--orAll bool =  foldr 

sumSquares :: [Int] -> Int
sumSquares = sum . map (^2)

--zeroToTen :: [Int] -> [Int]
--zeroToTen = filter(>=0) . filter(<=10)    

squareRoots :: [Float] -> [Float]
squareRoots = map sqrt . filter(>=0)

countBetween :: Float -> Float -> [Float] -> Int
countBetween a b = length . filter(>=a) . filter(<= b)

alwaysPositive :: (Float -> Float) -> [Float] -> Bool
alwaysPositive op list = 
    if foldr(+) 0 (map op list) > 0
        then True
    else
        False





productSquareRoots :: [Float] -> Float
productSquareRoots list = product (filter(>0)(map  sqrt(list))) 

removeFirst :: (a -> Bool) -> [a] -> [a]
removeFirst  elem [] = []
removeFirst elem (x:xs)
    |elem x= xs
    |otherwise = x : removeFirst elem xs


removeLast :: (a -> Bool) -> [a] -> [a]
removeLast elem [] = []
removeLast elem xs = reverse (removeFirst elem ( reverse xs))


zeroToTen :: [Int] -> [Int]
zeroToTen = filter(\x -> x>=0 && x <=10)

-- \ x -> 2 * x -- this function doubles its argument
-- \ x y -> x + y -- this function adds its two arguments

--(>=0) . filter(<=10)  

--(\x -> x + 1) 4