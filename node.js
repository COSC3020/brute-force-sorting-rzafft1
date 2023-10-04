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

function permutationSort (a, index)
{
    if (index == a.length)
    {
        console.log(a)
        if (checkSort(a) == true)
        {
            console.log("found")
        }     
    }
    else 
    {
        for (var i = index; i < a.length; i++)
        {
            swap(a, index, i)
            permutationSort(a, index+1)
            swap(a, index, i)
        } 
    }

}

let arr = [4, 3, 1, 2]
//let arr = [1, 3, 2]
permutationSort(arr,0)