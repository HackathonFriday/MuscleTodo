class MypageController < ApplicationController
  def show
    # ユーザー取得
    token = cookies[:token]
    @user = User.find_by(token: token)

    if @user.nil?
      redirect_to home_index_path
    end

    # マッチョモーダル用の変数取得
    is_creation_flg = false; # テスト用にタスク作成時と完了時のフラグをここで設定

    characters = Character.pluck(:image_path)
    phrases = Phrase.where(is_creation: is_creation_flg).pluck(:content)

    character = characters.sample
    phrase = phrases.sample

    @macho_modal = {'path' => character, 'phrase' => phrase, 'is_creation_flg' => is_creation_flg}
    # ここまで

    # タスク作成追加画面（モーダル表示）用の変数
    @task_modal = Task.new
    # ここまで

    #カテゴリーモーダル用
    @category_modal = Category.new

    # タスク完了前の経験値
    @old_exp = 80

    # タスク一覧の取得
    task_list = Task.eager_load(:category, :user).where(user_id: @user.id)
    @no_complete_task_list = task_list.where(is_done: false).to_a;
    @complete_task_list = task_list.where(is_done: true).to_a;

    @categories = Category.where('user_id IS NULL OR user_id = ?', @user.id)
  end

  def create
    token = cookies[:token]
    @user = User.find_by(token: token)
    @task = Task.create(task_params)
    @task.user_id = @user.id;
    if @task.save
      redirect_to mypage_show_path
    end
    # TODO: 経験値加算処理追加
  end

  private
    def task_params
      byebug
      params.permit(:title, :note, :category_id, :expire_date)
    end
end
