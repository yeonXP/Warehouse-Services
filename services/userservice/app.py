from flask import Flask, request, jsonify

app = Flask(__name__)

# 서버 상태 확인용 API
@app.route("/health")
def health():
    return jsonify({
        "status": "ok",
        "service": "userservice"
    })

# 배포 버전 확인용 API
@app.route("/version")
def version():
    return jsonify({
        "service": "userservice",
        "version": "v1.0.0"
    })

# QR/바코드 스캔 요청 처리 API
@app.route("/scan", methods=["POST"])
def scan():
    data = request.get_json()

    barcode = data.get("barcode")

    if not barcode:
        return jsonify({
            "error": "barcode 값이 필요합니다."
        }), 400

    return jsonify({
        "message": "스캔 성공",
        "barcode": barcode,
        "next": "WMS Server로 서비스 요청 전달 예정"
    })

if __name__ == "__main__":
    # 외부 접속 가능하게 0.0.0.0 사용
    app.run(host="0.0.0.0", port=5000)
