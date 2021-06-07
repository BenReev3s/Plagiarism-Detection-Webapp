
headPlusOne :: [Int] -> Int
headPlusOne [] = 0 
headPlusOne (x:xs) = x + 1

duplicateHead :: [a] -> [a]
duplicateHead [] = []
duplicateHead (x:xs) = x : x:xs

rotate :: [a]  -> [a]
rotate [] = []
rotate [a] = [a]
rotate (x:y:rest) = (y:x:rest)

listLength :: [a] -> Int
listLength [] = 0
listLength (x:xs) = 1 + listLength xs

multAll :: [Int] -> Int
multAll [] = 1
multAll (x:xs) = x * multAll xs 

andAll :: [Bool] -> Bool
andAll [] = True
andAll (x:xs) = x && andAll xs

countElems :: Int -> [Int] -> Int
countElems _ [] = 0
countElems elem (x:xs)
  | elem == x = 1 + countElems elem xs
  | otherwise = countElems elem xs

removeAll :: Int -> [Int] -> [Int]
removeAll _ [] = []
removeAll elem (x:xs)
    |elem == x = removeAll x xs
    |otherwise= x : removeAll elem xs

type StudentMark = (String, Int)

listMarks :: String -> [StudentMark] -> [Int]
listMarks _ [] = []
listMarks student (x:xs)
  | student == fst x = snd x : listMarks student xs
  | otherwise = listMarks student xs


sorted :: [Int] -> Bool
sorted []  = True
sorted [x] = True
sorted (x:y:xs) = x <= y && sorted (y:xs)


prefix :: [Int] -> [Int] -> Bool
prefix [] _ = True
prefix (x:xs) (y:ys)
  | x /= y = False
  | otherwise = prefix xs ys


