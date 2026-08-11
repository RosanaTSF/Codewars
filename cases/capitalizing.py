def to_jaden_case(smith)->str:
    words = smith.split()
    result = []
    for word in words:
        result.append(word.capitalize())

    result = " ".join(result)

    return(result);

print(to_jaden_case("how can mirrors be real if our eyes aren't real"))