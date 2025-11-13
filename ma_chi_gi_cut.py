import subprocess
import os

def to_seconds(time_str):
    """분.초 형식을 초 단위로 변환"""
    if '.' in time_str:
        minutes, seconds = time_str.split('.')
        return int(minutes) * 60 + int(seconds)
    else:
        return int(time_str) * 60  # 분만 입력했을 경우

def format_time(seconds):
    """초 단위를 hh:mm:ss 형식으로 변환"""
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:02d}"

def main():
    input_video = "KakaoTalk_20251113_235131174.mp4"

    if not os.path.exists(input_video):
        print("❌ full_video.mp4 파일이 이 폴더에 없습니다.")
        return

    print("잘라낼 구간을 입력하세요.")
    print("예시: 1.12 1.14 2.56 6.45 (시작1 끝1 시작2 끝2 ...)")
    times = input("👉 ").split()

    if len(times) % 2 != 0:
        print("❌ 시작/끝 시간이 짝이 맞지 않습니다.")
        return

    for i in range(0, len(times), 2):
        start_sec = to_seconds(times[i])
        end_sec = to_seconds(times[i + 1])
        start = format_time(start_sec)
        end = format_time(end_sec)

        output_file = f"clip_{(i // 2) + 1}.mp4"

        cmd = [
            "ffmpeg", "-i", input_video,
            "-ss", start, "-to", end,
            "-an",           # 🔇 오디오 제거 (뮤트)
            "-c:v", "copy",  # 비디오 무손실 복사
            output_file,
            "-y"
        ]
        subprocess.run(cmd)
        print(f"✅ {output_file} (뮤트) 저장 완료 ({start} ~ {end})")

    print("\n🎉 모든 구간 뮤트 영상 추출 완료!")

if __name__ == "__main__":
    main()
