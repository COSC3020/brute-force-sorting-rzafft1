function swap (x, a, b)
{
    let tmp = x[a]
    x[a] = x[b]
    x[b] = tmp
}

function checkSort(a)
{
    for (let i = 0; i < a.length; i++)
    {
        if (a[i] > a[i+1])
        {
            return false 
        }
    }
    return true
}

function permutationSort (a, index, numPermutations)
{
    if (index == a.length)
    {
        console.log(a)
        if (checkSort(a) == true)
        {
            console.log("found")
        }     
        return numPermutations + 1
    }
    else 
    {
        for (var i = index; i < a.length; i++)
        {
            swap(a, index, i)
            numPermutations = permutationSort(a, index+1, numPermutations)
            swap(a, index, i)
        } 
        return numPermutations
    }

}

let arr = [4, 3, 1, 2]
//let arr = [1, 3, 2]
console.log(permutationSort(arr,0,0))