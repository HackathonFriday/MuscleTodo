class InsertPhrases < ActiveRecord::Migration[5.1]
  def insert_data
    [
      # タスク作成時
      {content: 'タスクの追加で俺の筋肉が喜んでるぜ！', is_creation: true},
      {content: '勉強中のプロテイン補給、忘れんなよ！', is_creation: true},
      {content: '筋肉を作るにも継続しかない。頑張れよ', is_creation: true},
      {content: 'このタスクが終わったらジム行こうぜ', is_creation: true},
      # タスク完了時
      {content: 'よく頑張ったな！ほら、プロテインだ', is_creation: false},
      {content: '筋肉もプログラミングスキルも1日にして成らず...次回もよろしくな！', is_creation: false},
      {content: 'おっ、勉強終わったか。ジム行く？', is_creation: false},
      {content: 'お前が筋肉に見えてくるぜ', is_creation: false},
    ]
  end

  def change
    insert_data.each do |record|
      Phrase.create(record)
    end
  end
end
