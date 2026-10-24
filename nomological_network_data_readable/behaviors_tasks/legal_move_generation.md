# Legal move generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Legal move prediction  

## State of the Field

**Space of definitions.** Across the recorded definitions, the dominant framing treats this behavior as generating only moves that are valid under the rules from a given game state. The definitions align on conforming to the set of legal actions, with one paper describing an inductive bias toward legal next-tokens, such as a board's legal next moves, and another framing it as legal move prediction that filters out impossible or illegal actions during decision-making. Success is described in terms of predicting legal moves in the underlying game, or generating only valid moves.

**Variants.** Papers place this behavior in game or rule-based environments, and the examples are phrased as next-move generation from a current state. A naming variant appears in the form legal move prediction, while other descriptions emphasize legal next-tokens or legal next moves.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers nonetheless describe checking the behavior by asking whether a model always predicts legal moves in the underlying game, and one snippet refers to a legal move rate as the reported result format.

**What it is taken as evidence of.** Only one construct is linked to it, World modeling, and the recorded relationship is related rather than measured_by, causes, or correlates. One paper connects legal move prediction to world modeling by stating that acting as a world model further requires capabilities including state-tracking, legal move prediction, and terminal state detection, and no alternative construct link is recorded.

## Sources

**[What Has a Foundation Model Found? Using Inductive Bias to Probe for World Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vafa25a/vafa25a.pdf)**
> In a game or rule-based environment, generating outputs that conform to the set of valid actions from a given state.

**[Mastering Board Games by External and Internal Planning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schultz25a/schultz25a.pdf) (as "Legal move prediction")**
> Generating only valid moves according to the rules of the game, filtering out impossible or illegal actions during decision-making.

## Relationships

### Associated with
- **World modeling** (constructs)
  > Acting as world model further requires the following capabilities: (i) state-tracking (determining the new state of the game after a move has been played in the previous state), (ii) legal move prediction, (iii) terminal state detection. (Section 2)
  - [Mastering Board Games by External and Internal Planning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schultz25a/schultz25a.pdf)
