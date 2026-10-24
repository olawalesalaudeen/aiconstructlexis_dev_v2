# Multi-turn jailbreaking
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Multi-turn jailbreak, Multi-turn jailbreak persistence, Multi-turn adversarial conversation  

## State of the Field

**Space of definitions.** Across the papers, it is most commonly described as a sequence of conversational turns that gradually moves from benign or less harmful prompts toward harmful or policy-violating content. Definitions agree on the multi-turn, stepwise character of the behavior: one description says it "starts with a benign query and gradually escalates to more harmful content by inserting intermediate prompts," while others stress exchanges in which each turn builds on earlier responses. A narrower formulation treats success not just as eliciting harmful content once, but as continuing and refining a successful jailbreak over later turns as new contextual information appears.

**Variants.** The papers use several near names for related versions of the behavior: "multi-turn jailbreak," "multi-turn jailbreak persistence," and "multi-turn adversarial conversation." Common variants differ in where the sequence places emphasis, either on escalation through intermediate prompts, on second-turn refinement and enhancement of an already successful strategy, or on automated red-teaming style exchanges in which an attacker model dynamically uses a wide set of prompting techniques. One description also specifies an "observation, thought, and strategy" structure for the attacker model's turn-by-turn reasoning.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, the papers describe elicitation procedurally, by starting with a benign query and inserting intermediate prompts, prompting the model again to refine and enhance a strategy after updated information, or directing an attacker model to reason through each reply in an "observation, thought, and strategy" format. One paper also refers to second-turn ASR and win rate when discussing outcomes, but no linked instrument is named.

**What it is taken as evidence of.** No construct is linked to it as evidence of one. The papers therefore do not specify a broader construct that this behavior is taken to indicate.

## Sources

**[Foot-In-The-Door: A Multi-turn Jailbreak for LLMs](https://aclanthology.org/2025.emnlp-main.100.pdf) (as "Multi-turn jailbreak")**
> Responding across multiple conversational turns in a way that gradually shifts from benign to harmful content.

**[Harmful Prompt Laundering: Jailbreaking LLMs with Abductive Styles and Symbolic Encoding](https://aclanthology.org/2025.emnlp-main.1296.pdf) (as "Multi-turn jailbreak persistence")**
> The continuation and refinement of a successful jailbreak across multiple interaction turns, where the model updates its harmful response based on new contextual information.

**[Automated Red Teaming with GOAT: the Generative Offensive Agent Tester](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pavlova25a/pavlova25a.pdf) (as "Multi-turn adversarial conversation")**
> Engaging in a sequence of exchanges with a target language model where each turn builds on prior responses to gradually elicit policy-violating content.
