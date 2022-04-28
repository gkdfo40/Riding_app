import { Express } from "express";
import { LoginHandler } from "./controller/Auth.controller";
export default function routes(app: Express) { 
  // 1.login
  app.post('/api/Auth/login', LoginHandler)

  // 2.username 중복확인
  app.post('/api/Auth/check_name')

  // 3.신규 회원 등록
  app.post('/api/Auth/save')

  // 4.지역 check box 선택
  app.post('/api/search/select_local')

  // 5.search Bar Text input
  app.post('/api/search/search_bar')

  // 6.파티 참가 신청 Button
  app.post('/api/party/join')

  // 7.파티 참가 취소 Button
  app.delete('/api/party/Withdrawal')

  // 8.파티원 정보 가져오기
  app.post('/api/Auth/member')

  // 9.신청 취소 Button
  app.delete('/api/party/cancel')

  // 10.파티 삭제 Button
  app.delete('/api/party/delete')

  // 11.사용자 정보 가져오기
  app.get('/api/Auth/profile')

  // 12.프로필 이미지 변경
  app.post('/api/image/profile_image_change')

  // 13.사용자 프로필 정보 변경
  app.put('/api/Auth/profile_save')

  // 14.코스 이미지 생성
  app.post('/api/image/course_image_save')

  // 15.파티 데이터 생성
  app.post('/api/party/create')
}
