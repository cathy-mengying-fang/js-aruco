import Tone from "../core/Tone";
import "../component/Merge";
import "../core/AudioNode";

/**
 *  @class Tone.Mono coerces the incoming mono or stereo signal into a mono signal
 *         where both left and right channels have the same value. This can be useful
 *         for [stereo imaging](https://en.wikipedia.org/wiki/Stereo_imaging).
 *
 *  @extends {Tone.AudioNode}
 *  @constructor
 */
Tone.Mono = function(){

	Tone.AudioNode.call(this);
	this.createInsOuts(1, 0);

	/**
	 *  merge the signal
	 *  @type {Tone.Merge}
	 *  @private
	 */
	this._merge = this.output = new Tone.Merge();

	Tone.connect(this.input, this._merge, 0, 0);
	Tone.connect(this.input, this._merge, 0, 1);
};

Tone.extend(Tone.Mono, Tone.AudioNode);

/**
 *  clean up
 *  @returns {Tone.Mono} this
 */
Tone.Mono.prototype.dispose = function(){
	Tone.AudioNode.prototype.dispose.call(this);
	this._merge.dispose();
	this._merge = null;
	return this;
};

export default Tone.Mono;

