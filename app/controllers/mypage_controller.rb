class MypageController < ApplicationController
  def show

    is_creation_flg = false; # テスト用にタスク作成時と完了時のフラグをここで設定

    characters = Character.pluck(:image_path)
    phrases = Phrase.where(is_creation: is_creation_flg).pluck(:content)

    character = characters.sample
    phrase = phrases.sample

    @modal_data = {'path' => character, 'phrase' => phrase, 'is_creation_flg' => is_creation_flg}

    # 未完了タスク一覧
    @incompolete_task_list = Task.where(Task.where(id: params[:id])).or(is_done: false)
    # 完了タスク一覧
    @compolete_task_list = Task.where(Task.where(id: params[:id])).or(is_done: true)
  end

  def create
    @task = Task.create(task_params)
    redirect_to mypage_show_path
    # TODO: 経験値加算処理追加
  end

  private
    def task_params
      params.require(:task).permit(:title, :note, :category_id, :user_id)
    end
end
