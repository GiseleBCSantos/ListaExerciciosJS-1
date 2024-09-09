def get_number_in_range(text, min, max):
    number = int(input(text))
    return number if number <= max or number >= min else get_number_in_range(text, min, max)