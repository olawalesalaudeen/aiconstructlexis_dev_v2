# Evaluation bias
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Judge bias, Affinity bias, Bias in feedback, Implicit bias  

## State of the Field

**Definition agreement:** Conflicting. Several papers use "evaluation bias" for judge-side favoritism or hidden preferences in scoring, such as self-favoring, similarity bias, or unstated criteria preferences, while others define it as score error relative to ground truth or as distortion from flaws in the evaluation protocol. These definitions locate the construct in different things and mechanisms, so papers using them would not be studying the same phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats evaluation bias as a systematic distortion introduced when a model, or another evaluator, judges outputs or gives feedback. Most definitions locate the distortion in the evaluator's scoring or preferences: papers describe unfair favoring or disfavoring of certain models' responses, the expected gap between a judge's proxy score and a ground-truth score, higher scores for models functionally similar to the judge, or internal unstated preferences that can prioritize style over factuality and safety. A smaller line shifts the construct from evaluator behavior to the assessment setup, defining it as the expected deviation between estimated and true capability caused by flaws in the evaluation protocol, while another broadens it to systematic distortions in human or AI feedback that favor particular perspectives, demographics, or values.

**Space of facets.** Papers do not share a single taxonomy. One paper decomposes evaluation bias into original, independent, and related terms, and the recorded relational evidence also treats it as related to Self-preference bias. Elsewhere, nearby labels pick out different facets of the broader concern, including judge bias, affinity bias, implicit bias, self-favoring bias, and bias in feedback, so the terminology spans both broad distortion in evaluation or feedback and narrower judge-specific forms.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it in the recorded relationships. Still, papers operationalize the construct explicitly: one says it uses the preference gap to evaluate bias, another defines judge bias as the expected difference between a proxy score and a ground-truth score, and the causal framing writes evaluation bias as the difference between the expectation of an estimated capability and the true capability. Taken together, these operationalizations target different objects: favoritism between models' responses, proxy-versus-ground-truth scoring error, and bias in estimated capability.

**Links.** The relational evidence is narrow. One paper reports that evaluation bias is related to Self-preference bias. No causal or correlational links are recorded.

## Sources

**[PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)**
> A systematic tendency for a model, when acting as a reviewer, to unfairly favor or disfavor certain models' responses, including a self-favoring bias.

**[Limits to scalable evaluation at the frontier: LLM as judge won’t beat twice the data](https://proceedings.iclr.cc/paper_files/paper/2025/file/4264ee4376776907c0b87ed70b959585-Paper-Conference.pdf) (as "Judge bias")**
> The systematic error introduced when using a model as a judge, defined as the expected difference between the judge's proxy score and the ground-truth score.

**[Great Models Think Alike and this Undermines AI Oversight](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25b/goel25b.pdf) (as "Affinity bias")**
> The tendency of an LLM judge to assign higher scores to models whose predictions are functionally similar to its own, independent of actual performance.

**[Position: Challenges and Future Directions of Data-Centric AI Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yeh25b/yeh25b.pdf) (as "Bias in feedback")**
> Systematic distortions in human or AI-generated feedback that favor certain perspectives, demographics, or values due to non-representative data or model limitations.

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf) (as "Implicit bias")**
> An LLM-judge's internal, unstated preference for certain criteria over others, which influences its decisions independently of or in violation of explicit instructions.

## Relationships

### Associated with
- **LLM-as-a-judge** (measurements)
  > “Agents-as-an-Evaluator exhibit two biases: data bias and model bias.”
  - [Unbiased Evaluation of Large Language Models from a Causal Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bi/chen25bi.pdf)
