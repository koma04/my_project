def to_uppercase(s: str) -> str:
    """
    Преобразует все символы строки в заглавные.

    :param s: Входная строка
    :return: Строка с заглавными буквами
    """
    return s.upper()


def capitalize_words(s: str) -> str:
    """
    Делает заглавными первые буквы каждого слова в строке.

    :param s: Входная строка
    :return: Строка с заглавными первыми буквами каждого слова
    """
    return s.title()