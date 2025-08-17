import { useEffect } from "react";

export default function Toast({ toast, isVisible, setIsVisible }) {
  //   toast 변경 시 시간 초기화되도록
  useEffect(() => {
    if (toast) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  return (
    <>
      {isVisible && toast === "create" && (
        <div className="toast">아이템이 생성되었습니다.</div>
      )}
      {isVisible && toast === "update" && (
        <div className="toast">아이템이 수정되었습니다.</div>
      )}
      {isVisible && toast === "delete" && (
        <div className="toast delete">아이템이 삭제되었습니다.</div>
      )}
    </>
  );
}
