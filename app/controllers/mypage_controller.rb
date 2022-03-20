class MypageController < ApplicationController
  def show()
    # ユーザー取得
    token = cookies[:token]
    @user = User.find_by(token: token)

    if @user.nil?
      redirect_to home_index_path
    end

    # タスク追加もしくは完了後の遷移であれば、マッチョモーダル表示処理をする
    @is_from_create_or_update = false

    unless params[:is_creation_flg].nil?
      if params[:is_creation_flg] =~ /(true|True|TRUE)/
        is_creation_flg = true
      else
        is_creation_flg = false
      end

      @is_from_create_or_update = true

      # マッチョモーダル用の変数取得
      characters = Character.pluck(:image_path)
      phrases = Phrase.where(is_creation: is_creation_flg).pluck(:content)

      character = characters.sample
      phrase = phrases.sample

      logger.debug(params[:is_creation_flg])

      @macho_modal = {'path' => character, 'phrase' => phrase, 'is_creation_flg' => is_creation_flg}
    end
    # ここまで

    # タスク作成追加画面（モーダル表示）用の変数
    @task_modal = Task.new
    # ここまで

    #カテゴリーモーダル用
    @category_modal = Category.new

    # タスク完了前の経験値（old_expがなければ、現在の経験値を入れる）
    @old_exp = params[:old_exp]
    if @old_exp.nil?
      @old_exp = @user.exp
    end

    # タスク一覧の取得
    task_list = Task.eager_load(:category, :user).where(user_id: @user.id)
    @no_complete_task_list = task_list.where(is_done: false).to_a;
    @complete_task_list = task_list.where(is_done: true).to_a;

    # そのユーザーが作成したカテゴリと、デフォルトのカテゴリ一覧を取得
    @categories = Category.where('user_id IS NULL OR user_id = ?', @user.id)
  end

  def create
    token = cookies[:token]
    @user = User.find_by(token: token)
    @task = Task.create(task_params)
    @task.user_id = @user.id;
    if @task.save
      redirect_to action: :show, is_creation_flg: true
    end
  end

  def update
    task = Task.find(params[:id])
    task.update(is_done: true)

    token = cookies[:token]
    user = User.find_by(token: token)

    old_exp = user.exp

    user.exp += rand(30..70)
    user.save

    redirect_to action: :show, old_exp: old_exp, is_creation_flg: false
  end

  private
    def task_params
      params.permit(:title, :note, :category_id, :expire_date)
    end
end
