# 녹화

Slidev는 내장된 녹화 및 카메라 뷰를 가지고 있습니다. 이를 사용하여 프레젠테이션을 쉽게 한 곳에서 녹화할 수 있습니다.

## 카메라

네비게이션 패널의 <carbon-user-avatar class="inline-icon-btn"/> 버튼을 클릭하면 프레젠테이션에 카메라 뷰가 표시됩니다. 드래그하여 이동하고, 오른쪽 하단 모서리의 핸들을 사용하여 크기를 조정할 수 있습니다. 크기와 위치는 `localStorage`에 유지되므로 여러 번 새로 고침해도 일관되므로 걱정할 필요가 없습니다.

<Tweet id="1395006771027120133" />

## 녹화하기

네비게이션 패널의 <carbon-video class="inline-icon-btn"/> 버튼을 클릭하면 대화 상자가 나타납니다. 여기서 슬라이드에 포함된 카메라를 녹화할지 또는 두 개의 비디오 파일로 분리할지 선택할 수 있습니다.

이 기능은 [RecordRTC](https://github.com/muaz-khan/RecordRTC)에 의해 제공되며 [WebRTC API](https://webrtc.org/)를 사용합니다.

![](/screenshots/recording.png)
