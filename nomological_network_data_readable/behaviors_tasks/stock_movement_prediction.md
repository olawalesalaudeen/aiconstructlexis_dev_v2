# Stock movement prediction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Financial market movement prediction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a directional prediction task for stocks or financial markets. Most descriptions formulate it as deciding whether prices will rise or fall at a target trading day from historical market information, with contextual text sometimes added through news, financial data, or tweets; a smaller formulation extends the label space to a ternary classification with Fall, Neutral, and Rise. One paper explicitly describes it as a ternary or binary market movement direction classification task.

**Variants.** Papers use both market-level and stock-level formulations. Recurring variants include binary stock-direction forecasting from historical prices or broader historical market information, a news-driven multi-stock setting that predicts the adjusted close movement of all stocks simultaneously on the target trading day, and a financial market movement version based on streaming news that can be binary or ternary. Another formulation pairs historical prices with tweets as the textual signal.

**Space of elicitation and scores.** No measurement instrument is linked to it. Operationally, papers elicit it as a direction-classification output, usually rise versus fall or positive versus negative, with one formulation adding a neutral label; one paper reports ACC and MCC when discussing performance on the task.

**What it is taken as evidence of.** Papers do not link it to multiple constructs. The only linked construct is Robustness, and one paper reports that Robustness is related to Stock movement prediction, describing ACC and MCC results on news-driven multi-stock movement prediction as demonstrating robustness performance.

## Sources

**[Filtered not Mixed: Filtering-Based Online Gating for Mixture of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d4c2f25bf0c33065b7d4fb9be2a9add1-Paper-Conference.pdf) (as "Financial market movement prediction")**
> A classification task to predict the directional movement of a financial market, such as 'Fall', 'Neutral', or 'Rise', based on contextual information like news and financial data.

**[CausalStock: Deep End-to-end Causal Discovery for News-driven Multi-stock Movement Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/54d689d58fe54c92aee2d732fc49fca8-Paper-Conference.pdf)**
> Predicting whether each stock price will rise or fall at a target trading day from historical market information.

## Relationships

### Associated with
- **Robustness** (constructs)
  > “CausalStock outperforms all baselines on ACC as well as MCC across three datasets demonstrating robustness performance for news-driven multi-stock movement prediction task.”
  - [CausalStock: Deep End-to-end Causal Discovery for News-driven Multi-stock Movement Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/54d689d58fe54c92aee2d732fc49fca8-Paper-Conference.pdf)
