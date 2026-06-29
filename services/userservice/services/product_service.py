# 임시 상품 데이터
PRODUCTS = {
    "P001": {
        "name": "Logitech Keyboard",
        "stock": 30,
        "location": "A-01"
    },
    "P002": {
        "name": "Wireless Mouse",
        "stock": 18,
        "location": "B-02"
    },
    "P003": {
        "name": "USB-C Cable",
        "stock": 75,
        "location": "C-05"
    }
}


def get_product(barcode):
    """
    barcode로 상품 조회
    없으면 None 반환
    """
    return PRODUCTS.get(barcode)
