# Evaluator self-consistency
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Self-alignment  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** In the available definitions, the construct appears under the name self-alignment and is framed as the extent to which an evaluator's internal reasoning and scoring are consistent with its own task understanding and instructions. The accompanying descriptions tie this consistency to "internal thinking" that aligns the evaluator for better task and preference understanding and for stronger instruction following.

**Space of measurement.** No measurement instrument is linked to this construct. Papers instead connect it to two behavioral indicators, Instruction following and Instruction generation, and those connections are recorded as causal rather than measurement links, so the papers do not specify an explicit assessment procedure for it here.

**Links.** Several papers claim a causal relationship from evaluator self-consistency to Instruction following. In Self-Alignment with Instruction Backtranslation, training on the high quality portion of augmented data is said to lead to increasing instruction following performance, while DreamBench++ says it introduces internal thinking to strengthen task understanding and instruction following capabilities. One paper also claims a causal relationship from evaluator self-consistency to Instruction generation, describing self-augmentation in which the model predicts a prompt that would be correctly answered by part of a web document.

## Sources

**[DreamBench++: A Human-Aligned Benchmark for Personalized Image Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/71ad539a57b1fd49b19e5c80070cb8b9-Paper-Conference.pdf) (as "Self-alignment")**
> The extent to which the evaluator's internal reasoning and scoring are consistent with its own task understanding and instructions.
